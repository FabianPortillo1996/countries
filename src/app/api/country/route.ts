import ky from 'ky';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { FIELDS_TO_GET } from '@/constants/api.constants';
import { env } from '@/libs/env.mjs';
import type { CountriesResponse } from '@/types/api/countries.types';

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = request.nextUrl;
    const code = searchParams.get('code');

    const data = await ky
      .get(`${env.COUNTRY_ENTRY_POINT}/alpha/${code}?fields=${FIELDS_TO_GET}`)
      .json<CountriesResponse>();

    return NextResponse.json({ data });
  } catch (e) {
    return NextResponse.redirect(new URL(request.url));
  }
};
