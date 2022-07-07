import { useContext } from "react";

import alertContext from "../../context/alert/alertContext";

const Alerts = () => {
  const { alerts } = useContext(alertContext);

  if (alerts.length) {
    return alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        {alert.msg}
      </div>
    ));
  }
};

export default Alerts;
