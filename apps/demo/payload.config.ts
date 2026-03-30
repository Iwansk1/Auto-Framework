import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Vehicles } from "./collections/Vehicles";
import { Colors } from "./collections/Colors";
import { Wheels } from "./collections/Wheels";
import { Packages } from "./collections/Packages";
import { Occasions } from "./collections/Occasions";
import { s3Storage } from "@payloadcms/storage-s3";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },

    collections: [Users, Media, Vehicles, Colors, Wheels, Packages, Occasions],

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
                media: true,
                // optionally:
                // 'media-with-prefix': { prefix: 'some-prefix/' },
            },
            bucket: process.env.SUPABASE_BUCKET!,
            config: {
                endpoint: process.env.SUPABASE_ENDPOINT,
                credentials: {
                    accessKeyId: process.env.SUPABASE_ACCESS_KEY!,
                    secretAccessKey: process.env.SUPABASE_SECRET_KEY!,
                },
                region: process.env.SUPABASE_REGION,
                forcePathStyle: true,
            },
        }),
    ],
});
