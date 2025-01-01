"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle,
  Calendar,
  Trophy,
  Star,
  Globe,
  DollarSign,
  Award,
  ArrowRight,
  ChevronDown,
  Languages,
  BookCheck,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

export default function CampaignPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#d39727] via-[#f6df77] to-[#c78322] text-transparent bg-clip-text">
                  Win £1,000
                </span>
                , <span className="text-white">Empower Learners</span>
              </h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white">
                Join Sikkhon&apos;s Instructors Contest 1.0 and turn your
                expertise into impactful online courses. Reach millions and win
                big!
              </p>
            </div>
            <div className="lg:w-1/2 relative aspect-[3/2] w-full max-w-2xl mx-auto mt-8 lg:mt-0">
              <Image
                src="/sikkhon_Landing_Page_Section_Image.png"
                alt="Sikkhon Instructor Contest - Teaching Excellence"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg object-contain"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-3 sm:p-4 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <p className="font-bold text-xl sm:text-2xl">£1,000</p>
                <p className="text-xs sm:text-sm">Grand Prize</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Highlights */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Contest Highlights
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              { icon: Trophy, title: "Grand Prize", content: "£1,000" },
              {
                icon: Calendar,
                title: "Contest Participation Deadline",
                content: "March 31st, 2025",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600 group"
              >
                <item.icon className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-lg sm:text-xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  {item.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Why Teach on Sikkhon?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Globe,
                title: "Global Reach",
                content:
                  "Share your knowledge with a worldwide audience of eager learners",
              },
              {
                icon: DollarSign,
                title: "Lucrative Income",
                content: "Earn money through course sales",
              },
              {
                icon: Award,
                title: "Build Your Brand",
                content:
                  "Establish yourself as an industry expert and boost your professional profile",
              },
              {
                icon: Languages,
                title: "Teach in Any Language",
                content:
                  "Connect with learners around the world by teaching in any language of your choice",
              },
              {
                icon: BookCheck,
                title: "Teach Without Boundaries",
                content:
                  "We welcome instructors from all fields, not just limited to technical subjects",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 bg-white group"
              >
                <item.icon className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg">{item.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            How to Participate
          </h2>
          <div className="max-w-4xl mx-auto">
            <ol className="space-y-6 sm:space-y-8">
              {[
                {
                  title: "Sign Up",
                  description: "Register as a Sikkhon instructor for free",
                },
                {
                  title: "Create Your Course",
                  description: "Develop engaging content (min. 150 minutes)",
                },
                {
                  title: "Submit",
                  description:
                    "Publish your course by March 31st, 2025, to qualify for the contest!",
                },
                {
                  title: "Win Big",
                  description:
                    "Top instructor wins £1,000 and ongoing benefits",
                },
              ].map((step, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-blue-50 p-6 sm:p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-blue-100"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl mb-4 sm:mb-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Eligibility & Evaluation */}
      <section className="py-16 sm:py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Eligibility & Evaluation
          </h2>
          <div className="max-w-4xl mx-auto grid gap-6 sm:gap-8 lg:grid-cols-2">
            <Card className="p-6 sm:p-8 border-t-4 border-blue-600 bg-white hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                <CheckCircle className="text-blue-600 h-6 w-6 sm:h-8 sm:w-8" />
                Eligibility Criteria
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Publish at least 1 high-quality course",
                  "Minimum 150 minutes of total content",
                  "Clear audio and video quality",
                  "Comprehensive course description",
                  "Instructor’s email address must be verified",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-base sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6 sm:p-8 border-t-4 border-blue-600 bg-white hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                <Star className="text-blue-600 h-6 w-6 sm:h-8 sm:w-8" />
                Evaluation Criteria
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Content Quality (40%)",
                  "Course Structure (25%)",
                  "Student Engagement (25%)",
                  "Overall Impact (10%)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-base sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600">
                Courses will be evaluated by our expert panel based on these
                criteria to determine the winner.
              </p>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="https://sikkhon.com/instructor-registration/" passHref>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Participate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  q: "Who can participate in this contest?",
                  a: "Both new and existing Sikkhon instructors are eligible to participate. If you're not yet an instructor, you can easily sign up and join the contest.",
                },
                {
                  q: "What types of courses are accepted?",
                  a: "We welcome a wide range of topics including technology, business, creative arts, personal development, and more. The key is to create high-quality, engaging content that meets our eligibility criteria.",
                },
                {
                  q: "How will the winner be chosen?",
                  a: "Our expert panel will evaluate all eligible courses based on content quality, course structure, student engagement, and overall impact. The instructor with the highest-scoring course will win the grand prize.",
                },
                {
                  q: "What support does Sikkhon provide to instructors?",
                  a: "On Sikkhon, you can publish and manage your courses effortlessly for free. Our support team is here to help with any questions or concerns. Need assistance? Visit our support portal at ",
                  link: {
                    text: "support.sikkhon.com",
                    url: "https://support.sikkhon.com",
                  },
                },
                {
                  q: "What if my course category isn’t available on Sikkhon?",
                  a: "If your course content is educational, we’ve got you covered! Email us at support@sikkhon.com, and we’ll work on adding your desired category.",
                },
                {
                  q: "How can my courses gain more visibility?",
                  a: "Optimize your courses for SEO to enhance their visibility on Google and Sikkhon. Learn how to do it here: ",
                  link: {
                    text: "Optimize Courses for SEO",
                    url: "https://support.sikkhon.com/support/solutions/articles/101000540581-how-to-optimise-your-sikkhon-course-for-seo",
                  },
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-all duration-300"
                >
                  <button
                    className="w-full p-4 sm:p-6 text-left focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {item.q}
                      </h3>
                      <ChevronDown
                        className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 ${
                          openFaqIndex === index ? "transform rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>
                  {openFaqIndex === index && (
                    <div className="p-4 sm:p-6 pt-0">
                      <p className="text-base sm:text-lg text-gray-700">
                        {item.a}
                        {item.link && (
                          <Link
                            href={item.link.url}
                            className="text-blue-600 hover:text-blue-700 underline"
                          >
                            {item.link.text}
                          </Link>
                        )}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-16 sm:py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Contest Terms and Conditions
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Please read these terms & conditions carefully before
              participating:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
              <li>
                Participation in the Sikkhon Instructors Contest 1.0 is subject
                to these specific terms and our general{" "}
                <Link
                  href="https://sikkhon.com/terms-conditions/"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Terms & Conditions
                </Link>
                .
              </li>
              <li>
                The contest runs from January 1st, 2025 to March 31st, 2025.
                Courses must be submitted before the deadline to be eligible.
                Any courses published after the deadline will not qualify for
                this competition.
              </li>
              <li>
                Participants must be at least 18 years old and eligible to
                receive payments in their country of residence.
              </li>
              <li>
                The £1,000 grand prize is non-transferable and will be awarded
                to the individual instructor account.
              </li>
              <li>
                Participants must keep their address and payment information up
                to date. Sikkhon is not liable for any payments sent to
                incorrect recipients due to inaccurate or outdated information
                provided by the participant.
              </li>
              <li>
                Instructor email must be verified before registering for the
                contest.
              </li>
              <li>
                Instructors can publish more than 1 (One) Course, and all
                published courses will be considered for evaluation.
              </li>
              <li>
                Winning instructors may be required to participate in
                promotional activities or interviews related to the contest.
              </li>
              <li>
                Sikkhon reserves the right to disqualify any participant found
                to be engaging in fraudulent or unethical behavior.
              </li>
              <li>
                Course content must be original or properly licensed. Plagiarism
                or copyright infringement will result in immediate
                disqualification.
              </li>
              <li>
                Sikkhon may use parts of submitted courses for promotional
                purposes related to this contest.
              </li>
              <li>
                Tax implications of winning the prize are the sole
                responsibility of the winner.
              </li>
              <li>
                In the event of any dispute, the decision of Sikkhon's judging
                panel will be final.
              </li>
              <li>
                If there are any fees associated with the transaction, these
                transaction fees must be paid by the winner
              </li>
              <li>
                The time required for the transaction to be completed will vary
                based on the international banking system.
              </li>
              <li>
                The winning prize can be transferred via PayPal, bank transfer,
                or cheque. If the winner is unable to receive the prize due to
                legal issues in their country of residence or restrictions
                imposed by their central bank, Sikkhon is not responsible.
              </li>
              <li>
                Sikkhon employees, as well as their friends and family members,
                are not eligible to participate in this contest.
              </li>
              <li>
                Sikkhon reserves the right to postpone or cancel the contest
                without prior notice.
              </li>
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              By participating in the Sikkhon's Instructors Contest 1.0, you
              acknowledge that you have read, understood, and agree to these
              terms and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8">
            Ready to Start Your Teaching Journey?
          </h2>
          <p className="text-xl sm:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto">
            Join Sikkhon today, share your expertise, and compete for the £1,000
            grand prize!
          </p>
          <Link href="https://sikkhon.com/instructor-registration/" passHref>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-full transition-all duration-300 transform hover:scale-105 group"
            >
              Participate Now
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>

          <p className="mt-6 sm:mt-8 text-xs sm:text-sm opacity-80 max-w-2xl mx-auto">
            By joining, you agree to our Terms & Conditions. Start impacting
            lives through education and build your online teaching career with
            Sikkhon!
          </p>
        </div>
      </section>
    </div>
  );
}
