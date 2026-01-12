import { Element } from "react-scroll";
import Button from "../components/Button.jsx";

const Resume = () => {
    const resumeUrl = "resume/SK_Devane_CV.pdf";

    return (
        <section className="relative z-2 py-24 md:py-28 lg:py-40">
            <Element name="Resume">
                <div className="container">
                    <div className="relative flex max-lg:flex-col items-center gap-12 border-2 border-s3 rounded-7xl p-10 md:p-20 g7">

                        {/* Left Side: Content */}
                        <div className="flex-1 flex flex-col items-start">
                            <p className="caption mb-5 uppercase text-p3">Professional Credentials</p>
                            <h2 className="h2 mb-7 text-p4 uppercase max-md:h4">
                                My Resume
                            </h2>
                            <p className="body-1 mb-10 max-w-md">
                                Detailed overview of my technical skills, professional experience, and academic background in Data Analysis and Software Engineering.
                            </p>
                            <a href={resumeUrl} download="SK_Devane_Resume.pdf">
                                <Button icon="images/zap.svg">Download PDF</Button>
                            </a>
                        </div>

                        {/* Right Side: Preview */}
                        <div className="flex-1 w-full relative">
                            <div className="download_preview-before download_preview-after rounded-40 relative border-2 border-s5 overflow-hidden bg-s1 min-h-[500px] flex items-center justify-center">
                                <iframe
                                    src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                                    className="w-full h-[600px] rounded-3xl"
                                    title="Resume Preview"
                                />
                                {/* Glass Overlay for aesthetics */}
                                <div className="absolute inset-0 pointer-events-none border-4 border-s1 rounded-40" />
                            </div>
                        </div>

                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Resume;
