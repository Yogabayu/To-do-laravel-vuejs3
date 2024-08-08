<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function getCategories()
    {
        try {
            $categories = Category::all();

            return response()->json([
                'data' => $categories
            ]);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }

    public function getTodos(Request $request)
    {
        try {
            $request->validate([
                'username' => 'required|string|max:255',
                'email' => 'required|string|email|max:255',
            ], [
                'username.required' => 'The username field is required.',
                'username.string' => 'The username must be a string.',
                'username.max' => 'The username must not be greater than :max characters.',
                'email.required' => 'The email field is required.',
                'email.string' => 'The email must be a string.',
                'email.email' => 'The email must be a valid email address.',
                'email.max' => 'The email must not be greater than :max characters.',
            ]);
            $user = User::with('tasks')
                ->whereRaw('LOWER(username) = ?', [strtolower($request->username)])
                ->whereRaw('LOWER(email) = ?', [strtolower($request->email)])
                ->first();
            if (!$user) {
                return response()->json(['message' => 'User not found'], 404);
            }
            return response()->json([
                'data' => $user,
            ]);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }

    public function add(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'username' => 'required|string|max:255',
                'email' => 'required|string|email|max:255',
                'todos' => 'required|array',
            ], [
                'name.required' => 'The name field is required.',
                'name.string' => 'The name must be a string.',
                'name.max' => 'The name must not be greater than :max characters.',
                'username.required' => 'The username field is required.',
                'username.string' => 'The username must be a string.',
                'username.max' => 'The username must not be greater than :max characters.',
                'email.required' => 'The email field is required.',
                'email.string' => 'The email must be a string.',
                'email.email' => 'The email must be a valid email address.',
                'email.max' => 'The email must not be greater than :max characters.',
                'todos.required' => 'The todos field is required.',
                'todos.array' => 'The todos must be an array.',
            ]);

            $user = User::with('tasks')
                ->whereRaw('LOWER(username) = ?', [strtolower($request->username)])
                ->whereRaw('LOWER(email) = ?', [strtolower($request->email)])
                ->first();
            if ($user) {
                $tasks = [];
                foreach ($request->todos as $todo) {
                    $existingTask = $user->tasks()->where('category_id', $todo['category_id'])
                        ->where('description', $todo['description'])
                        ->first();
                    if (!$existingTask) {
                        $tasks[] = [
                            'user_id' => $user->id,
                            'category_id' => $todo['category_id'],
                            'description' => $todo['description'],
                            'created_by' => $user->id,
                            'updated_by' => $user->id,
                        ];
                    }
                }

                if (!empty($tasks)) {
                    $user->tasks()->createMany($tasks);
                }

                return response()->json([
                    'message' => 'Data created successfully',
                ]);
            } else {
                $user = User::create([
                    'name' => $request->name,
                    'username' => $request->username,
                    'email' => $request->email,
                ]);

                $tasks = [];
                foreach ($request->todos as $todo) {
                    $existingTask = $user->tasks()->where('category_id', $todo['category_id'])
                        ->where('description', $todo['description'])
                        ->first();
                    if (!$existingTask) {
                        $tasks[] = [
                            'user_id' => $user->id,
                            'category_id' => $todo['category_id'],
                            'description' => $todo['description'],
                            'created_by' => $user->id,
                            'updated_by' => $user->id,
                        ];
                    }
                }

                if (!empty($tasks)) {
                    $user->tasks()->createMany($tasks);
                }

                return response()->json([
                    'message' => 'Data created successfully',
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }

    public function deleteTodo($id)
    {
        try {
            $todo = Task::find($id);

            $todo->deleted_by = $todo->user_id;
            $todo->save();
            if (!$todo) {
                return response()->json(['message' => 'Data not found'], 404);
            }
            $todo->delete();

            return response()->json(['message' => 'Data deleted successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }
}
