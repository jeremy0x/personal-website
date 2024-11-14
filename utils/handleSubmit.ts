import { Dispatch, FormEvent } from "react";
import { toast } from "sonner";

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

  fetch("https://formsubmit.co/ajax/5ad6e90d1d6c9847586699d8ecf9fee2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
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
