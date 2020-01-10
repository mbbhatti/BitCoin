@extends('layout/layout')

@section('pageTitle', 'Bitcoin Price Graph')

@section('content')
<div class="container">
    <div class="form-row">        
        <div class="col-sm-12 col-md-12">
            {{ Form::open(array('id' => 'graphForm', 'name' => 'graphForm')) }}
                <div class="form-row">
                    <div class="col-sm-3 offset-sm-1 col-md-2 offset-md-2">                    
                        {{ Form::text('from', null, array('class' => 'form-control', 'id' => 'from')) }}
                    </div>
                    <div class="col-sm-3 offset-sm-1 col-md-2 offset-md-1">
                        {{ Form::text('to', null, array('class' => 'form-control', 'id' => 'to')) }}
                    </div>
                    <div class="col-sm-3 offset-sm-1 col-md-2 offset-md-1">
                        {{ Form::submit('Render', array('class' => 'btn btn-primary btn-block')) }}
                    </div>
                </div>
            {{ Form::close() }}

            <canvas id="BitCoinGraph"></canvas>           
        </div>
    </div>
</div>
<!-- Scripts -->
<script src="{{ asset('js/dist/Chart.min.js') }}"></script> 
<script src="{{ asset('js/dist/utils.js') }}"></script>
<script>  let url = '{{ env('API_URL') }}'; </script>
<script src="{{ asset('js/graph.js') }}"></script>
@stop