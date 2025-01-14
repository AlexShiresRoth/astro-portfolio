import GithubConnection from "./GithubConnection";

const Projects = () => {
  return (
    <div className="flex flex-col gap-8 min-h-screen pb-96">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-2xl text-emerald-500">IRIS 2.0</h3>
        <p>
          IRIS 2.0 is a next-generation internal Content Management System (CMS)
          designed to streamline operations for Agora Affiliates by enabling
          seamless management of digital content, assets, and workflows. Built
          using modern technologies like Nx Monorepo, Next.js, React, and
          TypeScript, IRIS 2.0 is focused on scalability, modularity, and user
          experience.
        </p>
        <p>
          This platform empowers affiliates with an intuitive interface to
          manage content efficiently while integrating secure authentication
          using Keycloak OpenID API. Advanced tools like Kendo UI and
          TailwindCSS enhance the UI's responsiveness, making it visually
          appealing and highly functional. As a key contributor to IRIS 2.0, I
          played a pivotal role in designing and implementing reusable, dynamic
          components, including a custom form generator powered by JSON
          configuration files.
        </p>
        <p>
          This component significantly reduces development overhead by enabling
          developers to create complex forms with minimal effort. My
          contributions also include runtime validation and error handling with
          Zod, ensuring robust and reliable data processing. In addition, I
          worked closely with cross-functional teams to align the platform's
          architecture and features with business needs, prioritizing
          scalability and maintainability.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-2xl text-emerald-500">PARE</h3>
        <p>
          PARE is an internal accounting software designed to meet the financial
          reporting and analysis needs of Agora Affiliates. Developed in
          parallel with IRIS 2.0 within the same Nx Monorepo, PARE focuses on
          streamlining financial workflows, managing transactions, and providing
          affiliates with real-time insights into their accounting data.{" "}
        </p>
        <p>
          Built with technologies like React, Next.js, TypeScript, and TanStack
          React Query, PARE delivers a seamless user experience while
          maintaining high performance and reliability. By sharing foundational
          components and architecture with IRIS 2.0, PARE benefits from
          consistent design patterns and reusable functionality. I oversee the
          development of PARE, ensuring its alignment with the organization’s
          accounting requirements.
        </p>
        <p>
          My efforts include implementing the custom form generator initially
          developed for IRIS, optimizing it for accounting-specific use cases in
          PARE. By leveraging tools like React Query and Next.js Server Actions,
          I streamlined data fetching and state management, ensuring a
          responsive and reliable user experience. Regular collaboration with
          stakeholders and the engineering team ensures that PARE continues to
          evolve in line with affiliate needs while adhering to high coding
          standards.
        </p>
      </div>
      <GithubConnection />
    </div>
  );
};

export default Projects;
