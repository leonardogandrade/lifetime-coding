class ArgumentError extends Error { }

export class OverheatingError extends Error {
    constructor(temperature) {
        super(`The temperature is ${temperature} ! Overheating !`);
        this.temperature = temperature;
    }
}


function checkHumidityLevel(humidityPercentage) {
    if (humidityPercentage > 70)
        throw new Error('Humidity is higher than 70%.')
}


function reportOverheating(temperature) {
    if (temperature > 500)
        throw new OverheatingError(temperature);
    if (temperature === null)
        throw new ArgumentError()
}


function monitorTheMachine(actions) {
    try {
        actions.check()
    } catch (err) {
        if (err instanceof ArgumentError)
            actions.alertDeadSensor()
        else if (err instanceof OverheatingError) {
            if (err.temperature < 600)
                actions.alertOverheating()
            else
                actions.shutdown()
        } else
            throw new err
    }
}


export function monitorTheMachine({ check, alertDeadSensor, alertOverheating, shutdown }) {
    try {
      check()
    } catch (error) {
      if (error instanceof ArgumentError) {
        alertDeadSensor();
      } else if (error instanceof OverheatingError) {
        if (error.temperature < 600) {
          alertOverheating()
        } else {
          shutdown()
        }
      } else {
        throw error;
      }
    }
  }