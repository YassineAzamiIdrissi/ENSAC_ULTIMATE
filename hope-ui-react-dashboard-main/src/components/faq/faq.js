import {
  faBell,
  faBullhorn,
  faCalendarXmark,
  faCircleNodes,
  faFileInvoiceDollar,
  faPeace,
  faPieChart,
  faSliders,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

export const faqs = [
  {
    id: 1,
    title: "What’s your return policy?",
    details: `At the time of shipment, we assure that your product will be free
	of defects in materials and workmanship and will conform to the
	specifications outlined on the lot-specific datasheet included
	with the product. Please contact our technical support services if
	you have a technical issue with a product: Email: 
	<a href="mailto:phoenix@email.com">phoenix@support.com</a>. If the team concludes that the product does not adhere to the
	requirements mentioned on the datasheet, we will provide a free
	replacement or a full refund of the product's invoice price.`,
  },
  {
    id: 2,
    title: `I ordered the wrong product. What should I do?`,
    details: `We would consider accepting the return of the merchandise, subject to an 20% restocking fee plus any shipping and handling fees. The customer is liable for shipping costs for both the returned product and the new replacement product, both to and from our facility. All returns require prior authorisation from us and must be mailed back to us within seven business days of receiving the goods. Products must be returned in the same or equivalent packing (i.e., cold and insulated) in which they were shipped (i.e., cold and insulated). Once we get the item, we will ship out the replacement item.`,
  },
  {
    id: 3,
    title: `How do I cancel my order?`,
    details: `If you must cancel your order, please call <a href="tel:+871406-7509">(871) 406-7509</a> Please note that we attempt to process and dispatch orders the same day (if received before 1pm PST), and once your product has shipped, our return policy will apply.`,
  },
  {
    id: 4,
    title: `What are your shipping & handling charges?`,
    details: `Our handling fee is a flat rate of $20. The shipping costs vary depending on your location and the items you've purchased. For an exact shipping cost estimate, please proceed through the checkout process and enter your items and address.`,
  },
  {
    id: 6,
    title: `Do you accept purchase orders?`,
    details: `Yes. Please include your purchase order number at online checkout, or clearly label it on a faxed or emailed purchase order. Please give the relevant email or mailing address for your accounts payable department so that the invoice can be sent to the appropriate location.`,
  },
];

export const faqCategories = [
  {
    id: "sale-101",
    name: "Sales",
    icon: faPieChart,
    description:
      "Answer the most frequently asked questions about your products & services here.",
    category: "popular",
    topFaqs: [
      {
        question: "How can I purchase your services?",
        answer:
          "You can mail us at info@phoenix.template or go to our services page to directly choose and pay to buy the services we provide.",
      },
      {
        question: "How much do your service cost?",
        answer:
          "Our services can be availed at a minimum cost. Please visit info.phoenix-tw.com to get insights into the better purchase plans.",
      },
      {
        question: "Do you offer any money-back guarantee?",
        answer:
          "We offer refunds to customers who are eligible to get one under our terms and conditions, as well as our policies.",
      },
    ],
    faqs: [
      {
        question: "Do you offer any customer service for your customers?",
        answer:
          "We do. We have an enthusiastic team of customer service providers to help you resolve any relevant issues that might arise while using the services. Please contact support.phoenix.themewagon for further info",
      },
      {
        question: "Do you offer any demo/trial version of your services?",
        answer:
          "No, we don’t avail any prebooking or trial option. You can contact our support team for further info. ",
      },
      {
        question: "What currencies does Phoenix work with?",
        answer:
          "We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number ",
      },
      {
        question: "How can I dropship with Phoenix?",
        answer:
          "We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your o",
      },
      {
        question: "What is Phoenix and how does it work?",
        answer:
          "We allow the return of all items within 30 days of your original order’s date. I",
      },
      {
        question: "How much does Shopify cost?",
        answer:
          "original order’s date. If you’re interested in returning your items, send us an email with your order numb",
      },
    ],
  },
  {
    id: "delivery-101",
    name: "Delivery",
    icon: faTruckFast,
    description:
      "Answer each & every question about your product and service delivery, maintain customers.",
    topFaqs: [
      {
        question: "Do you avail any delivery tracking option?",
        answer:
          "Yes. You can track your order and shipment details through the purchase code that we send, and know the current status of your purchase",
      },
      {
        question: "What happens if I’m not available to receive?",
        answer:
          "Our delivery team will try to reach you if you’re not available, and you can choose to pick it up from our pick-up points",
      },
    ],
    faqs: [
      {
        question:
          "What are your policies regarding missing or damaged product?",
        answer:
          "We replace or refund for the damaged products, if our delivery personnel make any mistake. Note that, any damage on your or seller’s end is irreversible. ",
      },
      {
        question: "Do you offer same-day or any express delivery option?",
        answer:
          "Yes, you can select your delivery option from the given options, and you’ll get the service accordingly. ",
      },
      {
        question: "What is the delivery cost?",
        answer:
          "We have three different delivery options available for our customers. The costs hence differ, and you’ll get the details on info.phoenix.themewagon.",
      },
      {
        question: "What is the proximity of your shipment?",
        answer:
          "For three different categories of delivery options, our shipping time varies. This is dependent on the category/delivery option you choose.",
      },
    ],
  },
  {
    id: "notification-101",
    name: "Notification",
    icon: faBell,
    description:
      "Check and get all the necessary notices on the same page and board. Learn the FAQs here.",
    topFaqs: [
      {
        question: "Do you allow customized notification option?",
        answer:
          "Yes, you can customize and select the topics that you want to be notified about and remove the ones you think are unnecessary. ",
      },
      {
        question: "Are my notifications secure?",
        answer:
          "Yes, we take data security seriously and all the information, including your notification types and other things, are protected and cannot be shared.",
      },
    ],
    faqs: [
      {
        question: "Do you allow direct actions on your notification?",
        answer:
          "Depending on the notification type, and your settings and privacy settings. Please remember, we do not allow open sharing of notifications.",
      },
      {
        question: "Do you allow multi-device notification?",
        answer:
          "Certainly! No need to worry about getting notified about anything as you can log in to multiple devices and get notified according to your preferred way.",
      },
      {
        question: "Do you allow multi-language notification?",
        answer:
          "We have a preselection checkbox to choose your preferred language to get notified in. You can always change the settings later.",
      },
      {
        question: "Can I opt out anytime?",
        answer:
          "You can opt out or modify the preferred notification option as you want to and opt out anytime.",
      },
    ],
  },
  {
    id: "order-101",
    name: "Order",
    icon: faFileInvoiceDollar,
    description: "Check and have all your product order FAQs answered here. ",
    topFaqs: [
      {
        question: "Do offer wholesale order option?",
        answer:
          "Yes, you can choose the desired product and select the order option to bulk, and you’re good to go.",
      },
      {
        question: "Can I change my order?",
        answer:
          "If you’ve already clicked check out, then you’ll need to wait for the confirmation call before changing the order. We recommend deciding beforehand to avoid further hassles. ",
      },
    ],
    faqs: [
      {
        question: "Do you allow viewing the order history?",
        answer:
          "Yes, you can see and manage your order history from the orders page that we have and keep your details personal.",
      },
      {
        question: "Do you notify about the placed orders?",
        answer:
          "You can palace personalize the notification option as you want to, and we’ll keep you updated accordingly about your orders and everything.",
      },
      {
        question: "How do I track my orders?",
        answer:
          "You can easily track all your currently placed orders with the ID number that we provided you. Please remember not to share the ID with any untrusted contact.",
      },
      {
        question: "How do I know my order placement is confirmed?",
        answer:
          "We’ll send an OTP (one time password) to verify and confirm the order, and you’ll be notified via your preferred notification method.",
      },
    ],
  },
  {
    id: "networking-101",
    name: "Networking",
    icon: faCircleNodes,
    description:
      "See and answer all the queries to help your clients and customers and build strong networking between your team and your clientele",
    topFaqs: [
      {
        question:
          "What are some best features for networking coming with this template?",
        answer:
          "Some features included in this template are responsiveness & compatibility, different contact form UIs, social pages and apps and many more. Explore and modify according to your wish and your resolution to grow!",
      },
      {
        question:
          "How can I utilize networking to gain insights into customer/client needs and preferences?",
        answer:
          "We provide detailed data visualization dashboards that can help you gain the required data to analyze and act according to your needs so that you get to enhance your growth through networking.",
      },
    ],
    faqs: [
      {
        question:
          "Are there any specific configuration process applied to use the networking of your site?",
        answer:
          "No, you can just use it as is. Yet, we recommend adjusting the page as you need, so you get the optimized feed to see.",
      },
      {
        question:
          "How can I use networking to generate leads and attract new customers or clients?",
        answer:
          "By using the default dashboards that we avail with the theme, you can log all your data and monitor the networking of your site.",
      },
      {
        question: "How can I effectively network with customers and clients?",
        answer:
          "Use our social apps pages to build any networking site and see yourself grow with enhanced and better networking options.",
      },
      {
        question:
          "What graphs can I use to build strong relationships with customers and clients?",
        answer:
          "We’ve added different data visualization charts with the template that can help you track your networking sites as well and help you in building a storing network. See the modules that came inclusive with the theme and you’ll get necessary insights.",
      },
    ],
  },
  {
    id: "customize-101",
    name: "Customize",
    icon: faSliders,
    description:
      "Answer customization related questions here for simple and easy assistance.",
    category: "popular",
    topFaqs: [
      {
        question: "Can I customize the design as needed?",
        answer:
          "Yes, you can just go to: settings>site theme>design>change and customize according to your needs with easy filters and checkbox from the given ones. ",
      },
      {
        question: "Can I personalize the contents as I need?",
        answer:
          "Yes, we allow easy and simple customization of feed and notification. You can select category and get the customized result on your feed.",
      },
    ],
    faqs: [
      {
        question:
          "Can I integrate third-party extensions or plugins into the e-commerce site template?",
        answer:
          "Yes, we’ve already installed necessary plugins and covered the most of what you might need. Also, you can integrate any third-party plugin that you need with our easy documentation.",
      },
      {
        question:
          "Can I customize the checkout process on the e-commerce site template?",
        answer:
          "You can edit and choose custom modules or import any from the Bootstrap components and customize the design as you want to.",
      },
      {
        question:
          "Can I use the customized design and maintain responsiveness?",
        answer:
          "You can if you follow the documentation accordingly and modify the codebase without error.",
      },
      {
        question:
          "Is it possible to change the color scheme of the site template?",
        answer:
          "We provide the theme color scheme in the box. You can choose any from there or use any custom color as your needs.",
      },
    ],
  },
  {
    id: "marketing-101",
    name: "Marketing",
    icon: faBullhorn,
    description: "Get all the marketing related questions answered here.",
    topFaqs: [
      {
        question: "How is this theme going to help my marketing strategy?",
        answer:
          "This template is SEO optimized and comes with built-in user-friendly dashboards that will help you track your leads, sales and help you get better insights into what you need to do for better growth.",
      },
      {
        question: "Do I need any distinct plugin or software to use it?",
        answer:
          "Certainly not, if you do not want to customize it totally. For full customization, please see our documentation.",
      },
    ],
    faqs: [
      {
        question: "Can I use the template for multiple sites?",
        answer:
          "Yes, we avail a multi-site option for this template. Please contact our support: support@phoenix.themewagon.",
      },
      {
        question: "Do you avail necessary marketing support?",
        answer:
          "We provide 24/7 technical support for the template and we cover related issues. Contact our helpline for further details.",
      },
      {
        question:
          "Can I change the style and design while also maintaining site SEO?",
        answer:
          "You certainly can, all our components are responsive and SEO optimized. Enjoy creating with Phoenix.",
      },
      {
        question: "Can I customize the emails pages of the theme?",
        answer:
          "Yes, our theme is totally customizable, and it will remain compatible and responsive even if you customize it. If you do not change or modify the codebase, there is nothing to worry about, since we provide 24/7 support for this theme.",
      },
    ],
  },
  {
    id: "our-vision-101",
    name: "Our Vision",
    icon: faPeace,
    description:
      "We provide web development solution in an economically efficient way. Learn further from these FAQs here",
    topFaqs: [
      {
        question: "What solutions do you offer?",
        answer:
          "We take on-demand projects and will be available for contractual front-end development (React/Vue), back-end development (LaRavel/NodeJS), UX/UI design and search engine optimization (SEO).",
      },
      {
        question:
          "What frameworks and technologies do you specialize in at our web development farm?",
        answer:
          "Our efficient offers solutions including but not limited to HTML5, CSS3, JavaScript (such as React, Angular), PHP, Python, WordPress, Drupal, and Magento. We have experience working with various content management systems (CMS) and e-commerce platforms",
      },
    ],
    faqs: [
      {
        question: "How do you ensure customer satisfaction?",
        answer:
          "We achieve it by closely collaborating with our clients throughout the development process, actively seeking feedback, providing regular project updates, and ensuring that our solutions align with their business goals and objectives.",
      },
      {
        question:
          "How does our web development provider ensure the security of websites and web applications?",
        answer:
          "Security is a top priority for our web development provider. We implement industry best practices, such as secure coding techniques, data encryption, protection against common web vulnerabilities (e.g., Cross-Site Scripting, SQL injection), and user authentication mechanisms to ensure the confidentiality, integrity, and availability of your website or web application",
      },
      {
        question:
          "How can you get started with our web development providers services?",
        answer:
          "Simply reach out to our team, and we will schedule an initial consultation to discuss your project requirements, goals, and timelines. We will provide you with a tailored proposal outlining the recommended services, deliverables, and pricing. Once we have your approval, we will embark on the journey of bringing your vision to life.",
      },
    ],
  },
  {
    id: "scheduling-101",
    name: "Scheduling",
    icon: faCalendarXmark,
    description:
      "See everything related to our scheduling from these FAQs below:",
    topFaqs: [
      {
        question:
          "Can I request changes to the project timeline after it has been finalized?",
        answer:
          "If you require changes to the project timeline, please communicate with our team as early as possible. We will assess the feasibility of the requested changes and work with you to accommodate them if feasible.",
      },
      {
        question:
          "Can I track the progress of my project and stay updated on the schedule?",
        answer:
          "Absolutely! We provide regular project updates, including progress reports and milestone achievements. We can set up a communication channel where you can track project progress and stay informed about the schedule throughout the development process.",
      },
    ],
    faqs: [
      {
        question: "Can I request an expedited timeline for my project?",
        answer:
          "If you have a specific deadline or require an expedited timeline for your project, please inform us during the initial discussions. We will evaluate the feasibility and provide you with a realistic timeline based on the projects complexity and our resource availability.",
      },
      {
        question:
          "Can I make changes to the project scope or requirements once the scheduling has been finalized?",
        answer:
          "It’s recommended that you do not. Still, if you need to make changes to the project scope or requirements after scheduling, please communicate with our team as soon as possible. We will assess the impact of the changes on the schedule and provide you with revised timelines and any necessary adjustments.",
      },
      {
        question:
          "Can your web development provider handle multiple projects simultaneously?",
        answer:
          "Yes, our web development provider is equipped to handle multiple projects simultaneously. We have a dedicated team of developers and project managers who excel at multitasking and prioritizing tasks. We strive to allocate resources effectively to ensure that each project receives the attention it requires.",
      },
      {
        question:
          "How far in advance should I contact your web development provider to schedule a project?",
        answer:
          "We recommend reaching out to our web development provider as soon as you have a project in mind. Contacting us in advance allows us to allocate the necessary resources and plan our schedule accordingly. It also ensures that we can accommodate your project within your desired timeframe.",
      },
    ],
  },
];
