"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type Props = {
  onSubmit?: () => void;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar = ({ onSubmit, onInputChange }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    router.push(`/search?keywords=${encodeURIComponent(inputValue)}`);
    if (onSubmit) {
      onSubmit();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onInputChange) {
      onInputChange(event);
    }
  };

  return (
    <form
      className="flex w-full max-w-sm items-center space-x-2"
      onSubmit={onHandleSubmit}
    >
      <Input
        type="movie_keyword"
        className="bg-primary-foreground"
        placeholder="Enter Movie ..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button type="submit">search</Button>
    </form>
  );
};
