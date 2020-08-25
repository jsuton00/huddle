import React, { useState } from 'react';
import grow from '../assets/images/illustration-grow-together.svg';
import flowing from '../assets/images/illustration-flowing-conversation.svg';
import users from '../assets/images/illustration-your-users.svg';
import { Tab, Tabs } from 'react-bootstrap';

export default function FeatureTabs() {
  const [key, setKey] = useState('grow-together');

  const changeKeys = (k) => {
    return setKey(k);
  };
  return (
    <Tabs
      id="feature-tabs"
      className="feature-tabs row"
      activeKey={key}
      onSelect={changeKeys}
      variant="pills"
    >
      <Tab eventKey="grow-together" title="Grow Together" className="tab-title">
        <div id="grow-together" className="feature-tab grow-together row">
          <div id="grow-together-body" className="feature-tab-body">
            <h5 className="feature-tab-title row">Grow Together</h5>
            <p className="feature-tab-text row">
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
          <div id="grow-together-body" className="feature-tab-body">
            <div className="feature-tab-image row">
              <img src={grow} alt="Grow Together" />
            </div>
          </div>
        </div>
      </Tab>
      <Tab
        eventKey="flowing-conversations"
        title="Flowing Conversations"
        className="tab-title"
      >
        <div
          id="flowing-conversations"
          className="feature-tab flowing-conversations row"
        >
          <div id="flowing-conversations-body" className="feature-tab-body">
            <h5 className="feature-tab-title row">Flowing Conversations</h5>
            <p className="feature-tab-text row">
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </p>
          </div>
          <div id="flowing-conversations-body" className="feature-tab-body">
            <div className="feature-tab-image">
              <img src={flowing} alt="Flowing Conversations" />
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="your-users" title="Your Users" className="tab-title">
        <div id="your-users" className="feature-tab your-users row">
          <div id="flowing-conversations-body" className="feature-tab-body">
            <h5 className="feature-tab-title row">Your Users</h5>
            <p className="feature-tab-text row">
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
          <div id="flowing-conversations-body" className="feature-tab-body">
            <div className="feature-tab-image">
              <img src={users} alt="Flowing Conversations" />
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
}
