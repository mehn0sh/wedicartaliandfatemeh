"use client";

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const events = [
  { icon: "/img/wedding-cake.png", title: "Aghd Ceremony", description: "شروع مراسم عقد" },
  { icon: "/img/door.png", title: "Entery", description: "ورود مهمان‌ها" },
  { icon: "/img/dimmer.png", title: "Dimmer", description: "روشن شدن نور و دکور" },
];

export default function WeddingTimeline() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-2">Wedding Timeline</h2>
      <h3 className="text-xl text-center text-gray-600 mb-10">Ali & Fatemeh</h3>

      <VerticalTimeline layout="1-column-left">
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "transparent", // حذف بکگراند
              boxShadow: "none",          // حذف سایه
              marginLeft: "80px",         // فاصله متن تا خط وسط
              padding: "0",               // padding صفر
              position: "relative",
            }}
            contentArrowStyle={{ display: "none" }}
            iconStyle={{ display: "none" }} // حذف TimelineDot
          >
            {/* آیکون بزرگ سمت چپ */}
            <div className="absolute left-[-120px] top-1/2 -translate-y-1/2 w-[120px] h-[120px] flex items-center justify-center z-10">
              <img src={event.icon} className="w-[120px] h-[120px] object-contain" alt={event.title} />
            </div>

            {/* متن مینیمال کنار خط */}
            <h4 className="text-lg font-normal text-gray-800">{event.title}</h4>
            <p className="text-gray-600 text-sm">{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}