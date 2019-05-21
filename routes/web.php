<?php

use App\Diary;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group(['prefix' => 'api'], function() use ($router) {
    $router->post('/login', function (Request $request) {
        return (int) ($request->password === env('LOGIN_PASSWORD'));
    });

    $router->get('/members', function () {
        return [
            ['id' => 1, 'name' => 'はづき'],
            ['id' => 2, 'name' => 'れな'],
            ['id' => 3, 'name' => 'そうた'],
        ];
    });

    $router->get('/diaries/{start}/{end}', function ($start, $end) {
        $start = date('Y-m-d', $start / 1000);
        $end = date('Y-m-d', $end / 1000 - 60 * 60 * 24);
        return ['items' => (new Diary)
            ->whereBetween('date', [$start, $end])
            ->get(['member_id', 'date', 'rank'])
            ->groupBy(function($record) {
                $date = explode('-', $record->date);
                return (int) array_pop($date);
            })
            ->map(function($records) {
                return $records->pluck('rank', 'member_id')->toArray() + [1 => 0, 2 => 0, 3 => 0];
            })];
    });

    $router->get('/diary/{date}', function ($date) {
        return (new Diary)
            ->where('date', $date)
            ->orderBy('member_id')
            ->get();
    });

    $router->post('/diary', function (Request $request) {
        $data = $request->input();
        $data['updated_at'] = date('Y-m-d H:i:s');
        $Diary = isset($data['id']) ? Diary::find($data['id']) : new Diary;
        $Diary->fill($data);
        return (int) $Diary->save();
    });
});

/* Default Route */
$router->get('/{any:.*}', function () use ($router) {
    return file_get_contents('../public/index.html');
});
