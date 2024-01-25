const Notification = (props) => {
  const { notificationText, notificationIcon, className } = props;
  return (
    <div className={`notification-container ${className}`}>
      <img className="icon" src={notificationIcon} />
      <p className="message">{notificationText}</p>
    </div>
  );
};

const element = (
  <div className="content-container">
    <h1 className="title">Notifications</h1>
    <div className="notification-content-container">
      <Notification
        notificationText="Information Message"
        notificationIcon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="information-notification"
      />
      <Notification
        notificationText="Success Message"
        notificationIcon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="success-notification"
      />
      <Notification
        notificationText="Warning Message"
        notificationIcon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="warning-notification"
      />
      <Notification
        notificationText="Error Message"
        notificationIcon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="danger-notification"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
