/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly API_KEY: string
	readonly GEMINI_API_KEY: string
	readonly SUPABASE_URL: string
	readonly SUPABASE_ANON_KEY: string
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
