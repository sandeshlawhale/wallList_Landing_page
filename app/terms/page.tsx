// app/terms/page.tsx (Next.js 13+ with App Router)

export default function TermsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="legal-heading">Terms and Conditions</h1>
      <p className="legal-para-muted">Last updated: September 08, 2025</p>

      <p className="legal-para">
        These Terms and Conditions (“Terms”) govern your use of the WallList
        mobile application (“App”), owned and operated by Sandesh Lawhale
        (“Owner,” “we,” “our,” or “us”). By downloading, installing, or using
        WallList, you agree to be bound by these Terms. If you do not agree,
        please do not use the App.
      </p>

      <h2 className="legal-subheading">1. Purpose of the App</h2>
      <p className="legal-para">
        WallList is a productivity app that allows users to add tasks and
        display them on their home screen wallpapers. The App is free to use and
        all task data is stored locally on your device.
      </p>

      <h2 className="legal-subheading">2. Eligibility</h2>
      <ul className="legal-list">
        <li>The App is available for all users.</li>
        <li>
          However, if required by law in your jurisdiction, you must be at least
          13 years old to use the App.
        </li>
        <li>
          By using WallList, you confirm that you meet this eligibility
          requirement.
        </li>
      </ul>

      <h2 className="legal-subheading">3. User Responsibilities</h2>
      <ul className="legal-list">
        <li>Use the App only for lawful purposes.</li>
        <li>
          Not attempt to interfere with the App’s functionality, reverse
          engineer, or distribute it in unauthorized ways.
        </li>
        <li>
          Be responsible for the information and images you use in the App.
        </li>
      </ul>

      <h2 className="legal-subheading">4. User Content</h2>
      <p className="legal-para">
        You may set your own images as wallpaper backgrounds. All tasks and
        wallpapers are stored locally on your device. We do not collect, store,
        or have access to your personal data or content.
      </p>

      <h2 className="legal-subheading">5. Third-Party Services</h2>
      <p className="legal-para">
        WallList integrates with the Pixabay API to provide wallpaper images. By
        using such wallpapers, you also agree to comply with{" "}
        <a
          href="https://pixabay.com/service/terms/"
          className="underline hover:text-accent"
          target="_blank"
        >
          Pixabay’s terms
        </a>
        . We are not responsible for the availability, accuracy, or legality of
        third-party services.
      </p>

      <h2 className="legal-subheading">6. Intellectual Property</h2>
      <p className="legal-para">
        The WallList App, its name, design, features, and code are the
        intellectual property of Sandesh Lawhale. You may not copy, modify, or
        distribute the App without prior written permission.
      </p>

      <h2 className="legal-subheading">7. Termination</h2>
      <p className="legal-para">
        We reserve the right to suspend or terminate your access to the App if
        you violate these Terms or misuse the App.
      </p>

      <h2 className="legal-subheading">8. Disclaimer of Warranties</h2>
      <ul className="legal-list">
        <li>
          The App is provided “as is” and “as available,” without warranties of
          any kind.
        </li>
        <li>We do not guarantee uninterrupted or error-free service.</li>
        <li>
          Wallpapers provided via Pixabay are subject to their own licensing and
          restrictions.
        </li>
      </ul>

      <h2 className="legal-subheading">9. Limitation of Liability</h2>
      <p className="legal-para">
        To the maximum extent permitted by law, Sandesh Lawhale is not liable
        for any damages arising from:
      </p>
      <ul className="legal-list">
        <li>Use or inability to use the App.</li>
        <li>Loss of data stored locally on your device.</li>
        <li>Reliance on third-party content (including Pixabay wallpapers).</li>
      </ul>

      <h2 className="legal-subheading">10. Changes to Terms</h2>
      <p className="legal-para">
        We may update these Terms from time to time. The updated version will be
        effective as soon as it is published within the App or on our website.
        Continued use of WallList means you accept the revised Terms.
      </p>

      <h2 className="legal-subheading">11. Governing Law</h2>
      <p className="legal-para">
        These Terms are governed by the laws of Maharashtra, India, and any
        disputes shall be resolved in courts located in Maharashtra.
      </p>

      <h2 className="legal-subheading">12. Contact Us</h2>
      <p className="legal-para">
        If you have any questions about these Terms, please contact us at:{" "}
        <a href="mailto:sandeshlawhale@gmail.com" className="legal-para">
          sandeshlawhale@gmail.com
        </a>
      </p>
    </div>
  );
}
