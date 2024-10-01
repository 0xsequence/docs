
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import swaggerJson from './swaggerspec.json'


export const complete = function (swaggerUi) {
    swaggerUi.preauthorizeApiKey("X-Access-Key", "AQAAAAAAABL7m8Y6sdKRhOU2etUqkwJ3uHE");
  };

function APIComponent() {
  return (
    <div className="test">
      <SwaggerUI 
      spec={swaggerJson}
      onComplete={complete}
       />
    </div>
  );
}

export default APIComponent;