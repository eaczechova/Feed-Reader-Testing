$(function() {
  describe('RSS Feeds', function() {

    it('allFeeds are defined and are not empty', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* A test that loops through each feed in the allFeeds object and
    * ensures it has a URL defined and that the URL is not empty.
    */

    it('URL is defined and is not empty', function() {
      allFeeds.map((item) => {
        expect(item.url).toBeDefined();
        expect(item.url).not.toBe('');
      });
    });

    /* A test that loops through each feed in the allFeeds object and
    * ensures it has a name defined and that the name is not empty.
    */

    it('names are defined and are not empty', function() {
      allFeeds.map((item) => {
        expect(item.name).toBeDefined();
        expect(item.name).not.toBe('');
      })
    });
  });

  describe('The menu', function() {
    const bodyElement = $('body');
    it('the menu element is hidden by default', function() {
      expect(bodyElement.hasClass('menu-hidden')).toBe(true);
    });

    it('the menu element changes visibility if menu icon is clicked', function() {
      const bodyElement = $('body');
      const menuIcon= $('menu-icon-link');

      expect(bodyElement.hasClass('menu-hidden')).toBe(true);
      menuIcon.trigger('click', function() {
        expect(bodyElement.hasClass('menu-hidden')).toBe(false);
      });
    });
  });

  describe('Initial Entries', function() {
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    /* A test that ensures when the loadFeed function is called and
    * completes its work, there is at least a single .entry element
    */

    it('feed container has at least one entry element', function() {
      expect($('.entry').length).toBeGreaterThan(0);
    });
  });

  describe('New Feed Selection', function() {
    let prevUrlEntries;
    let newUrlEntries;

    beforeEach(function(done) {
      loadFeed(0, function() {
        prevUrlEntries = $('.feed').html();
        loadFeed(1, function() {
        done();
        });
      });
    });

    /* A test that ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    */

    it('when a new feed is loaded, the content changes', function() {
      newUrlEntries = $('.feed').html();
      expect(prevUrlEntries).not.toEqual(newUrlEntries);
    });
  });
}());
