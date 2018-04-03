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
    var el = document.querySelector('body');

    /* A test that ensures the menu element is hidden by default.
    */

    it('the menu element is hidden by default', function() {
      expect(el.className).toBe('menu-hidden');
    });

    /* A test that ensures the menu changes visibility when
    * the menu icon is clicked.
    */

    it('the menu element changes visibility if menu icon is clicked', function() {
      var el = document.querySelector('body');
      var icon = document.querySelector('.menu-icon-link');
      var flag = false;

      icon.onclick = function() {
        if(!flag) {
          flag = true;
        } else {
          flag = false;
        }
      };

      if(!flag) {
        expect(el.className).toBe('menu-hidden');
      } else {
        expect(el.className).toBe(null);
      }

    });
  });

  describe('Initial Entries', function() {
    var container = $('.feed');
    beforeEach(function(done) {
      loadFeed(0);
      done();
    });

    /* A test that ensures when the loadFeed function is called and
    * completes its work, there is at least a single .entry element
    * within the .feed container.
    */

    it('feed container has at least one entry element', function() {
      expect(container.length).not.toBe(0);
    });
  });

  describe('New Feed Selection', function() {
    var feedEntries0;
    var feedEntries1;

    beforeEach(function(done) {
      loadFeed(0, function() {
        feedEntries0 = $('.feed').find('h2').html();
        done();
      });
    });

    /* A test that ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    */

    it('content changes', function(done) {
      loadFeed(1, function() {
        feedEntries1 = $('.feed').find('h2').html();
        expect(feedEntries0).not.toEqual(feedEntries1);
        done();
      });
    });
  });
}());
