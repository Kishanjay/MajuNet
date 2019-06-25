<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = ['first_name', 'last_name', 'age', 'address', 'city', 'phone'];

    public function timetables(){
        return $this->hasMany('App\Timetable');
    }
}