import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = ''
    weight = ''
    bmiValue = ''
    result = ''

    inputHandler(event) {
        const {name, value} = event.target
        if(name === "height") {
            this.height = value
        }
        if(name === "weight") {
            this.weight = value
        }
    }
    
    submitHandler(event) {
        event.preventDefault()
        this.calculate()
    }

    calculate() {
        var height = Number(this.height/100);
        var bmi = Number(this.weight) / (height*height);
        this.bmiValue = Number(bmi.toFixed(2));

        if(this.bmiValue < 18.5) {
            this.result = "Underweight"
        } else if (this.bmiValue >= 18.5 && this.bmiValue < 25) {
            this.result = "Healthy"
        } else if (this.bmiValue > 25 && this.bmiValue < 30) {
            this.result = "Overweigth"
        } else if (this.bmiValue >30) {
            this.result = "Obese"
        }
    }

    recalculate() {
        this.result = ''
        this.weight = ''
        this.height = ''
        this.bmiValue = ''
    }
}