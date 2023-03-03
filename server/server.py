from flask import Flask, request

app = Flask(__name__)


@app.route("/dec_to_base2", methods=['POST'])
def dec_to_base2():
    # aka Bk algorithm
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        data = request.get_json()
        dec_number = data['decNumber']
        decimal_places = data['decPlaces'] | 10

        decimal_number_copy = dec_number
        loops = 0
        decimal_representation = []
        while (dec_number != 0.0) and (loops < decimal_places):
            dec_number += dec_number
            integer_part = dec_number // 1.0
            decimal_representation.append(integer_part)
            dec_number %= 1.0
            loops += 1

        validate_result = 0.0
        for n, binary in enumerate(decimal_representation):
            print(binary)
            validate_result += binary * (2 ** -(n+1))  # Formula in notes

        print("{} should equal {}".format(validate_result, decimal_number_copy))
        return {'valid': validate_result == decimal_number_copy, 'result': decimal_representation}

    else:
        return 'Content-Type not supported!'


@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response


if __name__ == "__main__":
    app.run(debug=True, port=5001)
