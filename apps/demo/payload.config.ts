import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Vehicles } from "./collections/Vehicles";
import { Colours } from "./collections/Colors";
import { Wheels } from "./collections/Wheels";
import { Packages } from "./collections/Packages";
import { Occasions } from "./collections/Occasions";
import { s3Storage } from "@payloadcms/storage-s3";

if (!process.env.PAYLOAD_SECRET) {
    throw new Error("Missing PAYLOAD_SECRET");
}

if (!process.env.DATABASE_URI) {
    throw new Error("Missing DATABASE_URI");
}

if (!process.env.SUPABASE_ACCESS_KEY) {
    throw new Error("Missing SUPABASE_ACCESS_KEY");
}

if (!process.env.SUPABASE_SECRET_KEY) {
    throw new Error("Missing SUPABASE_SECRET_KEY");
}

if (!process.env.SUPABASE_BUCKET) {
    throw new Error("Missing SUPABASE_BUCKET");
}

if (!process.env.SUPABASE_ENDPOINT) {
    throw new Error("Missing SUPABASE_ENDPOINT");
}

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },

    collections: [Users, Media, Vehicles, Colours, Wheels, Packages, Occasions],

    editor: lexicalEditor(),

    secret: process.env.PAYLOAD_SECRET || "",

    typescript: {
        outputFile: path.resolve(dirname, "payload-types.ts"),
    },

    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || "",
        },
    }),

    plugins: [
        s3Storage({
            collections: {
                media: {},
            },
            bucket: process.env.SUPABASE_BUCKET || "",
            config: {
                endpoint: process.env.SUPABASE_ENDPOINT || "",
                credentials: {
                    accessKeyId: process.env.SUPABASE_ACCESS_KEY || "",
                    secretAccessKey: process.env.SUPABASE_SECRET_KEY || "",
                },
                region: process.env.SUPABASE_REGION || "",
                forcePathStyle: true,
            },
        }),
    ],
});
