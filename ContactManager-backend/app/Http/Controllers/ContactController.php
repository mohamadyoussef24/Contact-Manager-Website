<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Exception;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function getcontact(){
        $contact = Contact::all();
        return response() -> json($contact);

    }

    public function storecontact (Request $request){

        $request -> validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',

        ]);

        try{
            $contact= new Contact([
                'name' => $request->name,
                'phone' =>$request->phone,
                'latitude' =>$request->latitude,
                'longitude' =>$request->longitude
                
            ]);
            $contact->save();
            return response()->json([
                "message" => "ADD Contact successfully"
            ]);

        }catch(Exception $e){
            return response()->json([
                "message" => $e ,
                "also"=> "ADD contact fail"
            ]);

        }




    }
}
