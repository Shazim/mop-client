import React from 'react';
import TextField from 'components/atoms/form/TextField';

function ExhibitionRoom() {
  return (
    <div>
      <div className="flex">
        <button>live</button>
        <button>drafts</button>
      </div>
      {/* Step 1 */}
      <div>
        <div>Exhibition room details</div>
        <TextField
          name="domain"
          placeholder="max 100 characters"
          mb="6"
          height="38"
          label="Exhibition room name"
        />
        <div>** You can add more exhibition rooms later on.</div>
        <TextField
          name="domain"
          placeholder="max 100 characters"
          mb="6"
          height="38"
          label="Artist name (optional)"
        />
      </div>
      <div>
        <button>Next</button>
      </div>
      <button>Back</button>
      {/* Step2 */}
      <div>
        <div>Add artwork to exhibition room</div>
        <div>
          Add images that you want in your exhibition room. You can choose the
          order on the next screen.
        </div>
        <div>Search</div>
        <div>Choose Your artwork</div>
        <div className="card-featured">
          <div>
            <img src="" alt="" />
            <div>
              <div>checkbox</div>
              <div>My Featured Photo</div>
            </div>
          </div>
          <div>
            <div>Artwork name</div>
            <div>
              <img />
              <img />
            </div>
          </div>
          <div>
            <div>Edit Description</div>
            <img />
          </div>
        </div>
        <div>
          * To make new artwork searchable and sellable, please add here through
          the full add new item link. This form will save as a draft.
        </div>
        <button>Next</button>
      </div>
      <button>Back</button>
      {/* Step3 */}
      <div>
        <div>Choose your order</div>
        <div>Arrange your images into the order they will be viewed:</div>
        <div>
          Drag images up and down so they are arranged in the order you’d like
          them to be viewed. Please note that images at the top of the list will
          be viewed first.
        </div>
        <div>imgcards</div>
        <button>Next</button>
      </div>
      <button>Back</button>
      {/* Step4 */}
      <div>
        <div>Choose your style</div>
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <div>Style Name</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                purus neque, scelerisque pulvinar sed tellus mattis.
                Sollicitudin sit amet ultricies cursus volutpat, scelerisque
                molestie imperd.
              </div>
            </div>
          </div>
        </div>
        <button>Next</button>
      </div>
      <button>Back</button>
      {/* Step5 */}
      <div>
        <div>your exhibition demo</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra purus
          neque, scelerisque pulvinar sed tellus mattis. Sollicitudin sit amet
          ultricies cursus volutpat, scelerisque molestie imperd.
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <button>Next</button>
      </div>
      <div className="flex justify-center">
        <button>Back</button>
        <button>save as draft</button>
      </div>
      {/* Step6 */}
      <div>
        <div>Congratulations!</div>
        <div>Your exhibition is now live. Get sharing!</div>
        <div>
          <div>exhibit.vip/gal/123456</div>
          <button>Copy</button>
        </div>
      </div>
      <div>
        <button>Back</button>
        <button>Finish</button>
      </div>
    </div>
  );
}

export default ExhibitionRoom;
