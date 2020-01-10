<?php

namespace Tests\Feature;

use Tests\TestCase;

class GraphTest extends TestCase
{
    /**
     * A graph page display.
     *
     * @return void
     */
    public function testGraphPageDisplay()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
