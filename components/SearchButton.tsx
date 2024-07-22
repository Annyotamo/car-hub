import Image from "next/image";

export default function SearchButton({ classes }: { classes: string }) {
    return (
        <button type="submit" className={`-ml-3 z-10 ${classes}`}>
            <Image src="/magnifying-glass.svg" alt="search icon" width={40} height={40} className="object-contain" />
        </button>
    );
}
