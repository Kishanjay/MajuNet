<?php

namespace App\Http\Controllers\API;

use App\Timetable;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TimetableController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $timetable = Timetable::all();
        return $timetable;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'employee_id'=>'required|integer',
            'date'=>'required|date',
            'start_time'=>'required',
            'end_time'=>'required'
        ]);

        $timetable = new Timetable([
            'employee_id' => $request->get('employee_id'),
            'date' => $request->get('date'),
            'start_time' => $request->get('start_time'),
            'end_time' => $request->get('end_time')
        ]);
        $timetable->save();

        return $timetable;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Timetable  $timetable
     * @return \Illuminate\Http\Response
     */
    public function show(Timetable $timetable)
    {
        return $timetable;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Timetable  $timetable
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Timetable $timetable)
    {
        if ($timetable) $timetable->update($request->all());
        return $timetable;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Timetable  $timetable
     * @return \Illuminate\Http\Response
     */
    public function destroy(Timetable $timetable)
    {
        if ($timetable) $timetable->delete();
    }
}
