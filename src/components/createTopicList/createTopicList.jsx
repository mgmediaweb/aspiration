const filterRelated = (stored, obj) => {
  const topicList = [];

  obj.forEach((topic) => {
    if (stored) {
      let operation = parseInt(topic.stargazerCount, 10);
      const index = stored.findIndex((item) => item.name === topic.name);

      if (index > -1) operation = stored[index].stargazerCount + topic.stargazerCount;

      topicList.push({
        name: topic.name,
        stargazerCount: operation,
      });
    } else {
      topicList.push({
        name: topic.name,
        stargazerCount: parseInt(topic.stargazerCount, 10),
      });
    }
  });

  return topicList;
};

const createTopicList = (obj) => {
  let topics = {};

  obj.forEach((elem) => {
    elem.repositoryTopics.nodes.forEach((item) => {
      let counter = parseInt(item.topic.stargazerCount, 10);
      let related = filterRelated(null, item.topic.relatedTopics);

      if (topics[item.topic.name]) {
        counter += parseInt(topics[item.topic.name].stargazerCount, 10);

        related = filterRelated(
          topics[item.topic.name].relatedTopics,
          item.topic.relatedTopics,
        );
      }

      topics = {
        ...topics,
        [item.topic.name]: {
          relatedTopics: related,
          stargazerCount: counter,
        },
      };
    });
  });

  return topics;
};

export default createTopicList;
