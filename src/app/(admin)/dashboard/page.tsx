import MagicButton from "@/app/components/magic-button";

export interface PageProps { };

export default function Page(params:PageProps) {
    return (
        <main>
            <h1 className="text-xl">Dashboard Page</h1>
            <MagicButton/>
        </main>
    );
}