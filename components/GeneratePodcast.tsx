import { useState } from "react";
import { Loader } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useUploadFiles } from "@xixixao/uploadstuff/react";
//
import { useAction, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
//
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
//
import { GeneratePodcastProps } from "@/types";

//!
const useGeneratePodcast = ({
  setAudio, voiceType, voicePrompt, setAudioStorageId
}: GeneratePodcastProps)=> {
  const { toast } = useToast() // Just a success Toast

  const [isGenerating, setIsGenerating] = useState(false); // Generating...
  const generateUploadUrl = useMutation(api.files.generateUploadUrl); // Get upload URL
  const { startUpload } = useUploadFiles(generateUploadUrl) // Upload to Convex using Uploadstuff

  const getPodcastAudio = useAction(api.openai.generateAudioAction)
  // const getAudioUrl = useMutation(api.podcasts.getUrl);

  //!
  const generatePodcast = async () => {
    setIsGenerating(true);
    setAudio('');

    if(!voicePrompt) {
      toast({
        title: "Please provide a voiceType to generate a podcast",
      })
      return setIsGenerating(false);
    }

    try {
      const response = await getPodcastAudio({
        voice: voiceType,
        input: voicePrompt
      })
      // Create AUDIO file
      const blob = new Blob([response], { type: 'audio/mpeg' });
      const fileName = `podcast-${uuidv4()}.mp3`;
      const file = new File([blob], fileName, { type: 'audio/mpeg' });
      // Upload AUDIO file to Convex storage
      const uploaded = await startUpload([file]);
      // Get AUDIO storage ID
      const storageId = (uploaded[0].response as any).storageId;
      setAudioStorageId(storageId);
      // Get AUDIO URL
      const audioUrl = await getAudioUrl({ storageId });
      setAudio(audioUrl!);
      // Success
      setIsGenerating(false);
      toast({
        title: "Podcast generated successfully",
      })
    } catch (error) {
      console.log('Error generating podcast', error)
      toast({
        title: "Error creating a podcast",
        variant: 'destructive',
      })
      setIsGenerating(false);
    }
    
  }

  return { isGenerating, generatePodcast }
}

//!
const GeneratePodcast = (props: GeneratePodcastProps) => {
  // Generating new audio prompt
  const { isGenerating, generatePodcast } = useGeneratePodcast(props);

  return (
    <div>
      <div className="flex flex-col gap-2.5">
        <Label className="text-16 font-bold text-white-1">
          AI Prompt to generate Podcast
        </Label>
        <Textarea
          className="input-class font-light focus-visible:ring-offset-orange-1"
          placeholder="Provide text to generate audio"
          rows={5}
          value={props.voicePrompt}
          onChange={(e) => props.setVoicePrompt(e.target.value)}
        />
      </div>
      <div className="mt-5 w-full max-w-[200px]">
        <Button
          type="submit"
          className="text-16 bg-orange-1 py-4 font-bold text-white-1" /* onClick={generatePodcast} */
        >
          {isGenerating ? (
            <>
              Generating
              <Loader size={20} className="animate-spin ml-2" />
            </>
          ) : (
            "Generate"
          )}
        </Button>
      </div>

      {props.audio && (
        <audio
          controls
          src={props.audio}
          autoPlay
          className="mt-5"
          onLoadedMetadata={(e) =>
            props.setAudioDuration(e.currentTarget.duration)
          }
        />
      )}
    </div>
  );
};

export default GeneratePodcast;
