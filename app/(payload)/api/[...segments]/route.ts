/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import config from "@payload-config"
import {
  REST_DELETE,
  REST_GET,
  REST_OPTIONS,
  REST_PATCH,
  REST_POST,
  REST_PUT,
} from "@payloadcms/next/routes"
import type { NextRequest } from "next/server"

type RouteContext = { params: Promise<{ segments: string[] }> }

export const GET = REST_GET(config) as (req: NextRequest, ctx: RouteContext) => Promise<Response>
export const POST = REST_POST(config) as (req: NextRequest, ctx: RouteContext) => Promise<Response>
export const DELETE = REST_DELETE(config) as (req: NextRequest, ctx: RouteContext) => Promise<Response>
export const PATCH = REST_PATCH(config) as (req: NextRequest, ctx: RouteContext) => Promise<Response>
export const PUT = REST_PUT(config) as (req: NextRequest, ctx: RouteContext) => Promise<Response>
export const OPTIONS = REST_OPTIONS(config) as (req: NextRequest, ctx: RouteContext) => Promise<Response>
