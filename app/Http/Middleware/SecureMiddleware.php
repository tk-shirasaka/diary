<?php

namespace App\Http\Middleware;

use Closure;

class SecureMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (env('HTTP_X_FORWARDED_PROTO') === 'https' || env('APP_ENV') === 'local') {
            return $next($request);
        } else {
            return redirect()->to(preg_replace('/^http/', 'https', $request->fullUrl()));
        }
    }
}
