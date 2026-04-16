import { I18nText } from "@/types";

interface TripleCertBadgeProps {
    lang: 'it' | 'es';
}

export default function TripleCertBadge({ lang }: TripleCertBadgeProps) {
    const text = {
        it: "dal 2001",
        es: "desde 2001"
    };

    return (
        <div className="right-10 bottom-10 z-20 absolute flex items-center gap-4 bg-white/95 shadow-2xl backdrop-blur-sm p-5 rounded-xl max-w-[220px]">
            <div className="flex justify-center items-center bg-blue-100 rounded-full w-12 h-12 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-6.75a1.125 1.125 0 0 0-1.125 1.125v3.375m9 0ZM9 18.75V12m.75 0v-.75a2.25 2.25 0 1 1 4.5 0v.75m0 0V18.75" />
                </svg>
            </div>
            <div>
                <h4 className="font-bold text-blue-900 text-lg leading-tight">Triple Cert.</h4>
                <p className="font-medium text-[10px] text-zinc-500 uppercase tracking-tighter">
                    ISO 9001 - 14001 - 45001
                </p>
                <p className="font-bold text-blue-600 text-xs">
                    {text[lang]}
                </p>
            </div>
        </div>
    );
}