import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Team() {
  return (
    <>
      <div className="py-20 bg-gray-50" id="team">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-4xl text-gray-900 font-bold font-primary">
              Meet our excellent team
            </h2>
            <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              consequatur nobis, eius enim magnam omnis sed dolore sint velit
              temporibus laudantium corrupti molestiae maxime illum aliquam?
              Saepe quasi quibusdam reprehenderit quam aperiam necessitatibus?
              Ipsum, nam excepturi quas iste nulla unde.
            </p>
          </div>
          <div className="grid gap-12  items-center lg:grid-cols-4 md:grid-cols-2 font-secondary">
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl font-bold">Hentoni Doe</h4>
                <span className="block text-sm text-gray-500">
                  Human Resources (HR)
                </span>
                <div className="flex justify-center items-center gap-4 text-gray-700 my-2">
                  <LinkedInIcon />
                  <TwitterIcon />
                </div>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-80"
                src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg"
                alt="man"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl font-bold">Jonathan Doe</h4>
                <span className="block text-sm text-gray-500">CEO-Founder</span>
                <div className="flex justify-center items-center gap-4 text-gray-700 my-2">
                  <LinkedInIcon />
                  <TwitterIcon />
                </div>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-80"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="man"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl font-bold">Michael Moore</h4>
                <span className="block text-sm text-gray-500">
                  CTO-Co-founder
                </span>
                <div className="flex justify-center items-center gap-4 text-gray-700 my-2">
                  <LinkedInIcon />
                  <TwitterIcon />
                </div>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg"
                alt="woman"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl font-bold">Anabelle Doe</h4>
                <span className="block text-sm text-gray-500">
                  Chief Operations Officer
                </span>
                <div className="flex justify-center items-center gap-4 text-gray-700 my-2">
                  <LinkedInIcon />
                  <TwitterIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
