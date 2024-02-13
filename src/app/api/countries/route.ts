import ky from 'ky';
import _isEmpty from 'lodash/isEmpty';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import type { z } from 'zod';

import { FIELDS_TO_GET } from '@/constants/api.constants';
import { env } from '@/libs/env.mjs';
import { countriesParamsSchema } from '@/schemas/country.schema';
import type { CountriesResponse } from '@/types/api/countries.types';

const handleGetRouteByParams = (
  params: z.infer<typeof countriesParamsSchema>,
) => {
  if (!_isEmpty(params.search))
    return `${env.COUNTRY_ENTRY_POINT}/name/${params.search}?fields=${FIELDS_TO_GET}`;
  if (!_isEmpty(params.region))
    return `${env.COUNTRY_ENTRY_POINT}/region/${params.region}?fields=${FIELDS_TO_GET}`;
  return `${env.COUNTRY_ENTRY_POINT}/all?fields=${FIELDS_TO_GET}`;
};

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = request.nextUrl;
    const search = searchParams.get('name');
    const region = searchParams.get('region');
    const queryParse = countriesParamsSchema.parse({ search, region });
    const route = handleGetRouteByParams(queryParse);
    const data = await ky.get(route).json<CountriesResponse>();
    return NextResponse.json({ data });
  } catch (e) {
    return NextResponse.json({}, { status: 400 });
  }
};
