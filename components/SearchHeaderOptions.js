import React from "react";
import { useRouter } from "next/router";
import SearchHeaderOption from "./SearchHeaderOption";
import { PhotoIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function SearchHeaderOptions() {
  const router = useRouter();
  return (
    <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b">
      <SearchHeaderOption
        title="All"
        Icon={MagnifyingGlassIcon}
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchHeaderOption
        title="Images"
        Icon={PhotoIcon}
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
