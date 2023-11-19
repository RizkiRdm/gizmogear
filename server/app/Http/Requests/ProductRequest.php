<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        switch ($this->method()) {
            case 'POST': {
                    return [
                        'title' => 'required|string|max:255',
                        'category' => 'required|string',
                        'description' => 'required|string',
                        'price' => 'required|numeric',
                        'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
                    ];
                }
            case 'PUT':
            case 'PATCH': {
                    return [
                        'title' => 'sometimes|required|string|max:255',
                        'category' => 'sometimes|required|string',
                        'description' => 'sometimes|required|string',
                        'price' => 'sometimes|required|numeric',
                        'image' => 'sometimes|required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'

                    ];
                }
            default:
                break;
        }
    }
}
