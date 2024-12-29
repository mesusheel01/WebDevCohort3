'use client'
import { TextInput } from '@repo/ui/text-input';
import { useRouter } from 'next/navigation'; // Correct import for App Router.

export default function Home() {
    const router = useRouter();

    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                background: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center", // Fixed typo: changed `justifyItems` to `alignItems`.
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "1rem", // Added spacing between input and button.
                }}
            >
                <TextInput size="small" placeholder="Room name" />
                <button
                    onClick={() => {
                        router.push('/chat/123'); // Correct navigation method for App Router.
                    }}
                >
                    Join Room
                </button>
            </div>
        </div>
    );
}
