<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Timetable extends Model
{
    protected $fillable = ['employee_id', 'date', 'start_time', 'end_time'];
}
