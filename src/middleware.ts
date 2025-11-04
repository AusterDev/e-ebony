import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server'

const isProtectedRoute = createRouteMatcher(['/mock(.*)',])

export const onRequest = clerkMiddleware((auth, context) => {
  const { isAuthenticated, redirectToSignIn } = auth()

  if (!isAuthenticated && isProtectedRoute(context.request)) {

    return new Response(null, {
        status: 302,
        headers: {
            Location: "/auth/sign-in?next=" + context.url,
        }
    })
  }
})