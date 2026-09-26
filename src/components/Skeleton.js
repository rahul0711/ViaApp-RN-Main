import {View, ScrollView} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {
  cardSkeletonStyle,
  committeSkeletonStyle,
  eventsSkeletonStyle,
  meetingSkeletonStyle,
  messageSkeletonStyle,
  newsSkeletonStyle,
  sporteSkeletonStyle,
  departmentSkeletonStyle,
} from './styles';

export const EventsSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      {[0, 1, 2, 3].map(item => {
        return (
          <ScrollView key={item} style={eventsSkeletonStyle.flatListStyle}>
            <View style={eventsSkeletonStyle.eventImageBG} />
            <View style={eventsSkeletonStyle.eventImageBG} />
          </ScrollView>
        );
      })}
    </SkeletonPlaceholder>
  );
};

export const NewsSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      {[0, 1, 2, 3, 4, 5].map(item => {
        return (
          <ScrollView key={item} style={newsSkeletonStyle.newsSection}>
            <View style={newsSkeletonStyle.newsImage} />
            <View style={newsSkeletonStyle.newsTitle} />
          </ScrollView>
        );
      })}
    </SkeletonPlaceholder>
  );
};

export const MeetingSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      {[0, 1, 2, 3].map(item => {
        return (
          <ScrollView key={item} style={meetingSkeletonStyle.meetingSection}>
            <View style={meetingSkeletonStyle.meetingImage} />
            <View style={meetingSkeletonStyle.meetingTitle} />
            <View style={meetingSkeletonStyle.divider} />
          </ScrollView>
        );
      })}
    </SkeletonPlaceholder>
  );
};

export const MessageSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      {[0, 1, 2, 3, 4, 5, 6].map(item => {
        return (
          <ScrollView key={item} style={messageSkeletonStyle.msgSection}>
            <View style={meetingSkeletonStyle.meetingTitle} />
            <View style={messageSkeletonStyle.divider} />
          </ScrollView>
        );
      })}
    </SkeletonPlaceholder>
  );
};

export const CardSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      {[0, 1, 2, 3].map(item => {
        return (
          <View key={item} style={cardSkeletonStyle.mainBox}>
            <View style={cardSkeletonStyle.containBox} />
          </View>
        );
      })}
    </SkeletonPlaceholder>
  );
};

export const CommitteSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
        return (
          <View key={item} style={committeSkeletonStyle.mainBox}>
            <View style={committeSkeletonStyle.listView} />
          </View>
        );
      })}
    </SkeletonPlaceholder>
  );
};

export const DepartmentSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      {[0, 1, 2, 3, 4, 5].map(item => {
        return (
          <View key={item} style={departmentSkeletonStyle.mainDepartmentBox}>
            <View style={departmentSkeletonStyle.departmentListView} />
            <View style={departmentSkeletonStyle.departmentListView} />
            <View style={departmentSkeletonStyle.departmentListView} />
          </View>
        );
      })}
    </SkeletonPlaceholder>
  );
};

export const SporteSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      {[0, 1, 2, 3, 4, 5].map(item => {
        return (
          <ScrollView key={item} style={sporteSkeletonStyle.sporteSection}>
            <View style={sporteSkeletonStyle.sporteTitle} />
          </ScrollView>
        );
      })}
    </SkeletonPlaceholder>
  );
};

export const HomeSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View style={cardSkeletonStyle.mainBox}>
        <View style={cardSkeletonStyle.containBox} />
      </View>
      {[0, 1].map(item => {
        return (
          <View key={item} style={committeSkeletonStyle.mainBox}>
            <View style={committeSkeletonStyle.listView} />
            <View style={committeSkeletonStyle.listView} />
            <View style={committeSkeletonStyle.listView} />
          </View>
        );
      })}
    </SkeletonPlaceholder>
  );
};
