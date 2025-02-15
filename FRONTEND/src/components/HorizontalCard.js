import React from 'react';

function HorizontalCard() {
  return (
    <>
      <div className="container-fluid p-3 my-3">
        <h1 className="text-center">Superspeciality Departments</h1>
        <p className="text-center">
          We believe that a person can be best cured in a comfortable homely atmosphere & we strive to create an ambience where the patient feels more at home than at hospital
        </p>
        <div className="row mt-3">
          <div className="col-md-3">
            <div
              className="card text-center"
              style={{ borderColor: "steelblue", borderRadius: "30px", cursor: "pointer" }}
            >
              <img
                src="https://www.carewellhospital.co.in/wp-content/uploads/2021/04/brain.svg"
                className="card-img-top mx-auto"
                alt="Card"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Neurology & Neurosurgery</h5>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => window.open('https://en.wikipedia.org/wiki/Neurology', '_blank')}
                >
                  more
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card text-center"
              style={{ borderColor: "steelblue", borderRadius: "30px", cursor: "pointer" }}
            >
              <img
                src="https://www.carewellhospital.co.in/wp-content/uploads/2021/04/kidneys.svg"
                className="card-img-top mx-auto"
                alt="Card"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Urology & Nephrology</h5>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => window.open('https://en.wikipedia.org/wiki/Nephrology', '_blank')}
                >
                  more
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card text-center"
              style={{ borderColor: "steelblue", borderRadius: "30px", cursor: "pointer" }}
            >
              <img
                src="https://www.carewellhospital.co.in/wp-content/uploads/2021/04/endocrinology.svg"
                className="card-img-top mx-auto"
                alt="Card"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Oncology & Oncosurgery</h5>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => window.open('https://en.wikipedia.org/wiki/Oncology', '_blank')}
                >
                  more
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card text-center"
              style={{ borderColor: "steelblue", borderRadius: "30px", cursor: "pointer" }}
            >
              <img
                src="https://www.carewellhospital.co.in/wp-content/uploads/2021/04/stomach.svg"
                className="card-img-top mx-auto"
                alt="Card"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Gastroenterology and Gastrosurgery</h5>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => window.open('https://en.wikipedia.org/wiki/Gastroenterology', '_blank')}
                >
                  more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-3 my-3" style={{ backgroundColor: "tomato" }}>
        <div className="row mt-3">
          <div className="col-md-3">
            <div
              className="card text-center"
              style={{ border: "none", borderRadius: "30px", cursor: "pointer" }}
            >
              <img
                src="https://www.carewellhospital.co.in/wp-content/uploads/2021/04/pain-in-joints.svg"
                className="card-img-top mx-auto"
                alt="Card"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  Joint Replacement, Arthroscopy & Sports Medicine
                </h5>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => window.open('https://en.wikipedia.org/wiki/Arthroscopy', '_blank')}
                >
                  more
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card text-center"
              style={{ border: "none", borderRadius: "30px", cursor: "pointer" }}
            >
              <img
                src="https://www.carewellhospital.co.in/wp-content/uploads/2021/04/spinal-column.svg"
                className="card-img-top mx-auto"
                alt="Card"
                style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%" }}
              />
              <div className="card-body">
                <h5 className="card-title">Spine Surgery</h5>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => window.open('https://en.wikipedia.org/wiki/Spinal_surgery', '_blank')}
                >
                  more
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card text-center"
              style={{ border: "none", borderRadius: "30px", cursor: "pointer" }}
            >
              <img
                src="https://www.carewellhospital.co.in/wp-content/uploads/2021/04/intensivist.svg"
                className="card-img-top mx-auto"
                alt="Card"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Endocrinology Department</h5>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => window.open('https://en.wikipedia.org/wiki/Endocrinology', '_blank')}
                >
                  more
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card text-center"
              style={{ border: "none", borderRadius: "30px", cursor: "pointer" }}
            >
              <img
                src="https://www.carewellhospital.co.in/wp-content/uploads/2021/04/heart.svg"
                className="card-img-top mx-auto"
                alt="Card"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Cardiology Department</h5>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => window.open('https://en.wikipedia.org/wiki/Cardiology', '_blank')}
                >
                  more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HorizontalCard;
