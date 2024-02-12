import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    COUNTRY_ENTRY_POINT: z.string().url(),
    BFF_ENTRY_POINT: z.string().url(),
  },
});
