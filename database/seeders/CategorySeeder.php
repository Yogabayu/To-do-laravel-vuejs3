<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'ToDo'],
            ['name' => 'InProgress'],
            ['name' => 'Testing'],
            ['name' => 'Done'],
            ['name' => 'Pending'],
        ];

        foreach ($categories as $category) {
            Category::create([
                'name' => $category['name'],
                'created_by' => 1, // Assuming user with ID 1 is the admin
            ]);
        }
    }
}
