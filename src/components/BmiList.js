

function BmiList({range,bmi}) {
  // console.log(range);
  return (
    <div className="text-center shadow-sm rounded">
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-4 fw-bold">Type</div>
            <div className="col-4 fw-bold">BMI</div>
            <div className="col-4 fw-bold">Weight</div>
          </div>
        </li>
        <li className={ bmi < 18.5 ? "border border-danger border-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className="col-4">Underweight</div>
            <div className="col-4">&lt;18.5</div>
            <div className="col-4">&lt;{range.underWeight.low} kg</div>
          </div>
        </li>
        <li className={ bmi > 18.5 && bmi < 24.9 ? "border border-danger border-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className="col-4">Normal Weight</div>
            <div className="col-4">18.5-24.9</div>
            <div className="col-4">{range.normal.low + " kg - " + range.normal.high +" kg"}</div>
          </div>
        </li>
        <li className={ bmi > 24.9 && bmi < 29.9  ? "border border-danger border-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className="col-4">Overweight</div>
            <div className="col-4">25.0-29.9</div>
            <div className="col-4">{range.overWeight.low + " kg - " + range.overWeight.high +" kg"}</div>
          </div>
        </li>
        <li className={ bmi > 29.9 && bmi < 34.9 ? "border border-danger border-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className="col-4">Obesity class I</div>
            <div className="col-4">30.0-34.9</div>
            <div className="col-4">{range.obesityOne.low + " kg - " + range.obesityOne.high +" kg"}</div>
          </div>
        </li>
        <li className={ bmi > 34.9 && bmi < 39.9 ? "border border-danger border-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className="col-4">Obesity class II</div>
            <div className="col-4">35.0-39.9</div>
            <div className="col-4">{range.obesityTwo.low + " kg - " + range.obesityTwo.high +" kg"}</div>
          </div>
        </li>
        <li className={ bmi > 39.5 ? "border border-danger border-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className="col-4">Obesity class III</div>
            <div className="col-4">&gt;40</div>
            <div className="col-4">&gt;{range.obesityThree.high +" kg"}</div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default BmiList