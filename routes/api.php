<?php

use App\Http\Controllers\Admin\OfficeController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['namespace' => 'Api', 'prefix' => 'v1'], function () {
    Route::get('categories', [TodoController::class, 'getCategories'])->name('categories');
    Route::post('add', [TodoController::class, 'add'])->name('add');
    Route::post('gettodos', [TodoController::class, 'getTodos'])->name('gettodos');
    Route::delete('delete/{id}', [TodoController::class, 'deleteTodo'])->name('deleteTodo');
});
