import PersonAvatar from "@/components/about/PersonAvatar";
import { LinkedInBadge } from "@/components/about/LinkedInBadge";
import type { Person } from "@/types/about";

interface Props {
  person: Person;
}

export default function LegacyMemberItem({ person }: Props) {
  return (
    <div className="flex flex-col items-center text-center p-3 sm:p-6 rounded-xl border border-gray-100 bg-white hover:border-[#C0DD97] transition-colors h-full">
      <PersonAvatar src={person.imagePath} name={person.name} size={80} />
      
      <p className="font-bold text-[#002c19] text-xs sm:text-sm mt-3 sm:mt-4 leading-tight">
        {person.name}
      </p>

      {person.role && (
        <div className="mt-2 w-full flex justify-center items-center">
          <span className="inline-block w-full max-w-[150px] px-2 py-1 rounded-lg text-[10px] sm:text-xs font-medium leading-snug bg-[#EAF3DE] text-[#002c19]/80 border border-[#C0DD97]">
            {person.role}
          </span>
        </div>
      )}

      {person.title && (
        <p
          style={{
            fontSize: 11,
            color: "#002c19cc",
            marginTop: 6,
            lineHeight: 1.4,
          }}
        >
          {person.title}
        </p>
      )}

      <div className="mt-auto pt-3">
        <LinkedInBadge url={person.linkedIn} />
      </div>
    </div>
  );
}
