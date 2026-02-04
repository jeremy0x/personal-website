import { Dispatch, FormEvent } from "react";
import { toast } from "sonner";
import { env } from "../config/env";

interface HandleSubmitProps {
  event: FormEvent<HTMLFormElement>;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
}

export const handleSubmit = ({ event, setIsLoading }: HandleSubmitProps) => {
  event.preventDefault();
  setIsLoading(true);

  const target = event.target as typeof event.target & {
    name: { value: string };
    email: { value: string };
    message: { value: string };
  };

  // Validate that the formdrop URL is configured
  if (!env.FORMDROP_URL) {
    throw new Error(
      "NEXT_PUBLIC_FORMDROP_URL environment variable is required",
    );
  }

  fetch(env.FORMDROP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: target.name.value,
      email: target.email.value,
      message: target.message.value,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      setIsLoading(false);
      target.name.value = "";
      target.email.value = "";
      target.message.value = "";
      toast.success("Message sent successfully!", {
        description: "Keep an eye on your inbox for a response.",
      });
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false);
      toast.error("Oops! Message MIA. Try again!", {
        description: "If the issue persists, reach out via email.",
      });
    });
};
