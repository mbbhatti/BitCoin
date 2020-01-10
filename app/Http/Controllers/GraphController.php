<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GraphController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Graph Controller
    |--------------------------------------------------------------------------
    |
    | This controller is used to present line Graph for Bitcoin price.
    |
    */   
    
    /**
     * Show the application graph page.
     *
     * @return \Illuminate\Http\Response
     */
    public function show()
    {   
        return view("graph.index");
    }  
}
