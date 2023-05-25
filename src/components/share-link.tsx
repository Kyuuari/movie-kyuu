"use client";
import React from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { useToast } from "./ui/use-toast";

export const ShareLink = () => {
  const { toast } = useToast();

  const handleCopyUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    toast({
      title: "URL copied",
      description: "The URL has been copied to the clipboard.",
      variant: "share",
    });
  };
  return (
    <Button className="w-32 h-10" onClick={handleCopyUrl}>
      <p className="gap-2 flex flex-row flex-nowrap items-center">
        Copy URL <Icons.copy size={15} />
      </p>
    </Button>
  );
};
